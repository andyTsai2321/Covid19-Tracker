import React, {useState, useEffect} from "react";

import {
    Select,
    MenuItem,
    FormControl,
    Card,
    CardContent,
    Typography,
    Paper,
    Switch,
    Radio,
    RadioGroup,
    FormGroup,
    FormControlLabel,
    FormLabel,
    Box
} from "@material-ui/core";

import InfoBox from "./InfoBox/InfoBox";
import LineGraph from "./LineGraph/LineGraph";
import MapJS from "./Map/Map";
import TableJS from "./Table/Table";
import Search from "./Search/Search";
import {withStyles} from '@material-ui/core/styles';
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import {sortData, prettyPrintStat, toThousands} from "../utils/util";
import "./App.scss";
import "leaflet/dist/leaflet.css";
import {fetchRequest} from "../lib/Service"
import {coutryName} from "../lib/countryName"
import {FormattedMessage} from 'react-intl';

function App({setLocale, lang, setThemeType, themeType}) {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("Worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796});
    const [mapZoom, setMapZoom] = useState(3);
    const [casesType, setCasesType] = useState("cases");
    const [mapCountries, setMapCountries] = useState([]);
    const [reRenderMap, setReRenderMap] = useState(1);

    // table 排序
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = React.useState('cases');

    const [searchValue, setSearchValue] = useState('');

    const theme = createMuiTheme({
        palette: {
            type: themeType,
        },
    });

    useEffect(() => {
        fetchRequest("https://disease.sh/v3/covid-19/all")
            .then((data) => {
                setCountryInfo(data);
            });
    }, []);

    useEffect(() => {
        const getCountriesData = async () => {
            await fetchRequest("https://disease.sh/v3/covid-19/countries")
                .then((data) => {
                    let coutriesNameLang = data;
                    if (lang === 'zh-TW') {
                        coutriesNameLang = data.map((country) => ({
                            ...country,
                            country: coutryName[country.country] ? coutryName[country.country] : country.country
                        }));
                    }


                    const countries = coutriesNameLang.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }));
                    const sortedData = sortData(coutriesNameLang);
                    setTableData(sortedData);
                    setMapCountries(coutriesNameLang);
                    setCountries(countries);
                });
        };
        getCountriesData();
    }, []);

    const onCounrtyChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
        console.log(countryCode);
        const url =
            countryCode === "Worldwide"
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        fetchRequest(url)
            .then((data) => {
                setCountry(countryCode);
                setCountryInfo(data);
                if (countryCode !== 'Worldwide') {
                    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                } else {
                    setMapCenter(0, 0)
                }
                setMapZoom(4);
            });
    };

    const changeTheme = () => {
        if (themeType === "light") {
            setThemeType("dark");
        } else {
            setThemeType("light");
        }
        setReRenderMap(Math.random());
    };


    console.log("country info", countryInfo);

    const startSearch = (value) => {
        const result = [];
        mapCountries.forEach(item => {
            if (item.country.toLowerCase().includes(value.toLowerCase())) {
                result.push(item);
            }
        });
        setTableData(result)
    }

    const capitalizeFirstWord = str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const langChange = event => {
        setLocale(event.target.value)
    }
    console.log(lang)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const SwitchCus = withStyles({
        switchBase: {
            color: "#5462b3",
            '&$checked': {
                color: '#3f51b5',
            },
            '&$checked + $track': {
                backgroundColor: '#3f51b5',
            },
        },
        checked: {},
        track: {},
    })(Switch);

    const IOSSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: '#3f51b5',
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: '#3f51b5',
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }))(({classes, ...props}) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });

    return (
        <ThemeProvider theme={theme}>
            <div className={`app`}>
                <div className="app__left">
                    <div className="app__header">
                        <Typography color="textPrimary" variant="h4"><FormattedMessage id="WebTitle"/></Typography>
                        <FormControlLabel
                            control={<SwitchCus checked={themeType === "dark"} onChange={() => changeTheme()}
                                                name="checkedB"/>}
                            label={
                                <Typography color="textPrimary">
                                    <FormattedMessage id="DarkMode"/>
                                </Typography>
                            }
                        />

                        <RadioGroup row value={lang} onChange={langChange}>
                            <FormControlLabel value="en" control={<Radio color="primary"/>} label={
                                <Box color={themeType === "dark" ? "#fff" : "#000"}>EN</Box>
                            } color="red"/>
                            <FormControlLabel value="zh-TW" control={<Radio color="primary"/>} label={
                                <Box color={themeType === "dark" ? "#fff" : "#000"}>中文</Box>
                            } color="secondary"/>
                        </RadioGroup>
                        <FormControl className="app__dropdown">
                            <Select
                                variant="outlined"
                                value={country}
                                onChange={onCounrtyChange}
                            >
                                <MenuItem value="Worldwide">
                                    <FormattedMessage id="Worldwide"/>
                                </MenuItem>
                                {countries.map((country) => (
                                    <MenuItem value={country.value}>{country.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <Typography color="textPrimary" variant="h6"><FormattedMessage id="Overview"/></Typography>
                    <div className="app__stats">
                        <InfoBox
                            title={<FormattedMessage id="Cases"/>}
                            active={casesType === "cases"}
                            isRed
                            onClick={(e) => setCasesType("cases")}
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={toThousands(countryInfo.cases)}
                            index={1}
                        />
                        <InfoBox
                            title={<FormattedMessage id="Recovered"/>}
                            active={casesType === "recovered"}
                            onClick={(e) => setCasesType("recovered")}
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={toThousands(countryInfo.recovered)}
                            index={2}
                        />
                        <InfoBox
                            title={<FormattedMessage id="Deaths"/>}
                            isRed
                            active={casesType === "deaths"}
                            onClick={(e) => setCasesType("deaths")}
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={toThousands(countryInfo.deaths)}
                            index={3}
                        />
                    </div>
                    <MapJS
                        key={reRenderMap}
                        themeType={themeType}
                        casesType={casesType}
                        countries={mapCountries}
                        center={mapCenter}
                        zoom={mapZoom}
                    />
                </div>
                <Card className="app__right">
                    <CardContent>
                        <div style={{display: 'flex'}}>
                            <h3 style={{flex: '1', paddingRight: '10px', display: 'flex', alignItems: 'center'}}>
                                <FormattedMessage id="AllCountry"/>
                            </h3>
                            <Search onClick={(value) => startSearch(value)}/>
                        </div>
                        {/* Hint: Click on a country for more info */}
                        <TableJS countries={tableData} order={order} orderBy={orderBy}
                                 onRequestSort={handleRequestSort}/>
                    </CardContent>
                    <h3 style={{paddingLeft: '10px'}}>
                        <FormattedMessage id="WorldTrend"
                                          values={{
                                              casesType: <FormattedMessage id={capitalizeFirstWord(casesType)}/>
                                          }}/>
                    </h3>
                    <LineGraph className={'app__graph'} casesType={casesType} themeType={themeType}/>
                </Card>
            </div>
        </ThemeProvider>
    );
}

export default App;
