export type Staff = {
    id: number;
    name: string;
    number: string;
    password: string;
    fullAccess: boolean;
};

export type WinningPrediction = {
    resultDate: string;
    gameName: string;
    openPanna?: string;
    closePanna?: string;
};