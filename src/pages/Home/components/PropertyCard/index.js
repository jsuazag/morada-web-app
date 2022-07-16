import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { getStaticImage } from "../../../../utils/StaticImage";
import { PropertyImageWrapper, PropertyCardWrapper, PropertyInfoWrapper } from "./styles";

export const PropertyCard = (props) => (
    <PropertyCardWrapper>
        <PropertyImageWrapper>
            <img alt="foto propiedad" src={getStaticImage(props.mainImage)} />
        </PropertyImageWrapper>
        <PropertyInfoWrapper>
            <h3>{props.title}</h3>
            <SubTitle>
                {props.zone}, {props.city}
            </SubTitle>
            <PropertyTypeLabel />
            <PropertyBusinessType />
            <p>$ {props.value} </p>
        </PropertyInfoWrapper>
    </PropertyCardWrapper>
)