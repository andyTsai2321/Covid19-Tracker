import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import "./InfoBox.scss";
import {FormattedMessage} from "react-intl";


const activeClass = (index) => {
    return index === 1?"infoBox--red":index === 2?"infoBox--green":"infoBox--black"
}

function InfoBox({title, cases, isRed, total, active, index, ...props}) {
    return (
        <Card onClick={props.onClick} className={`infoBox 
                        ${active && activeClass(index)}`
        }>
            <CardContent>
                <Typography color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${index === 1 ? `red` : index === 2 ? `green` : null}`}>
                    {total}
                </h2>
                <Typography className="infoBox__total" color="textSecondary">
                    +{cases} <FormattedMessage id="IncreaseToday"/>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox;
