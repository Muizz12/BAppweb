import { count } from "console"

export interface GeneralType {
    Name: String,
    Type: String,
    ExtraType: String,
    Gener: String,
    Region: string,
    CheckBox: Boolean,
    GoogleLocation?: Boolean,
    showCallButton?: Boolean,
    visibleInSpotlight?: Boolean,
    Condition: String,
    Currency: String,
    Latitude?: number,
    Longitude?: number,
    PriceRange: String,
    Zoom?: number,
    Discription?: String,
    DisplayTag?: String,
    BookingPage?: String,
    MenuPage?: String
}
export interface UserType {
    password: string,
    email: string
}
export interface AddressType {
    Number: String,
    Email: String,
    WebSite: String,
    Street: String,
    cityTown: string,
    Zipcode: string,
    ProvinceRegion: string,
    Country: String,
}

// {"monday":{"opensAt":"", "closesAt":""}}
export interface timing {
    opensAt?: Date,
    closeAt?: Date
}

export interface Days {
    name?: string,
    isSelected?: boolean,
    timing?: timing[],
    date?: Date,
}

export interface EventsDays {
    name?: string,
    isSelected?: boolean,
    OpensAt?: Date,
    CloseAt?: Date
    date?: Date,
}

export interface SpacificDay {
    name?: string,
    isSelected?: boolean,
    currentDate?: Date,
    OpensAt?: Date,
    CloseAt?: Date
}
export interface FileObject {
    url: string,
    lastModified: number,
    lastModifiedDate: Date,
    name: string,
    size: number,
    type: number,
    webkitRelativePath: string
}
export interface ConditionType {
    id?: number
    title: string,
    description: string
}
export interface Type {
    id?: number
    index?: number
    title: string
}
export interface RegisterDetailsType {
    Name: string,
    Email: string,
    Mobile: string
    Phone: string,
    Street: string,
    City: string,
    PostalCode: string,
    Region: string,
    Country: string
}
export interface RegisterDetailsStateType {
    name: string | undefined
    email: string | undefined
    mobile: string | undefined
    phone: string | undefined
    street: string | undefined
    city: string | undefined
    zipCode: string | undefined
    region: string | undefined
    country: string | undefined
    accepted?: string
    venueIds?: number[]
}


export interface EventDetailsType {
    image: string | undefined,
    name: string,
    venueId: number | undefined,
    typeOfEvents: string,
    ticketPrice: number,
    eventDiscription: string,
    condition?: string[],
    displayTagSection: string[],
}

export interface EventDetailsUpdateType {
    image: string | undefined,
    name: string,
    venueId: number | undefined,
    typeOfEvents: string,
    ticketPrice: number,
    eventDiscription: string,
    condition?: string[],
    displayTagSection: string[],
    scheduleInput?: any[]
}
