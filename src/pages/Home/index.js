import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from 'react-icons/io5' 
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";

const PropertiesTypes = [
    { icon: IoBusiness, label: 'Apartamentos' },
    { icon: IoHome, label: 'Casas' },
    { icon: IoMap, label: 'Lotes' },
    { icon: IoPrism, label: 'Fincas' },
    { icon: IoLocation, label: 'Locales' },
];

export const Home = () => (
    <Page>
        <h1>home - morada</h1>
        <PropertyTypesContainer>
        {
            PropertiesTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label} /> )
        }
        </PropertyTypesContainer>

        <PropertyCard />
    </Page>
)