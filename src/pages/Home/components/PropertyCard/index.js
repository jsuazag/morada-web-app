import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
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
                { getCityZoneLabel(props.city, props.zone) }
            </SubTitle>
            <PropertyTypeLabel typeId={props.propertyType} />
            <PropertyBusinessType businessType={props.businessType} />
            <p>$ {props.value} </p>
        </PropertyInfoWrapper>
    </PropertyCardWrapper>
)