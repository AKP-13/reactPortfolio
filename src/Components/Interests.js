import React, { Component } from "react";
import { InlineIcon } from "@iconify/react";
import fitnessIcon from "@iconify-icons/ion/fitness";
import recyclingIcon from "@iconify-icons/icons8/recycling";
import worldwideLocation from "@iconify-icons/wpf/worldwide-location";
import food20Regular from "@iconify-icons/fluent/food-20-regular";
import xboxIcon from "@iconify-icons/cib/xbox";
import universityIcon from "@iconify-icons/la/university";

class Interests extends Component {
    render() {
        return (
            <>
                <p className="about-para icons">
                    <InlineIcon icon={fitnessIcon} color="#ffd166" />
                    <InlineIcon icon={recyclingIcon} color="#06d6a0" />
                    <InlineIcon icon={worldwideLocation} color="#ffd166" />
                    <InlineIcon icon={food20Regular} color="#118ab2" />
                    <InlineIcon icon={xboxIcon} color="#06d6a0" />
                    <InlineIcon icon={universityIcon} color="#118AB2" />
                </p>
            </>
        );
    }
}

export default Interests;
