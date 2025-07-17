export type Staff = {
    id: number;
    name: string;
    number: string;
    password: string;
    fullAccess: boolean;
};

export type GameName = {
    id: number;
    name: string;
    nameHindi: string;
    market: string;
    openTime: string;
    closeTime: string;
    status: 'Active' | 'Inactive';
    marketStatus: boolean;
};