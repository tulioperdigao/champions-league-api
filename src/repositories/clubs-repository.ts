import { ClubModel } from "../models/club-model";


const database = [
    { id: 1, name: "Paris Saint-Germain" },
    { id: 2, name: "Liverpool" },
    { id: 3, name: "Benfica" },
    { id: 4, name: "Barcelona" },
    { id: 5, name: "Real Madrid" },
    { id: 6, name: "Atlético de Madrid" },
    { id: 7, name: "Bayer Leverkusen" },
    { id: 8, name: "Bayern de Munique" },
    { id: 9, name: "Arsenal" },
    { id: 10, name: "PSV Eindhoven" },
    { id: 11, name: "Internazionale" },
    { id: 12, name: "Borussia Dortmund" },
    { id: 13, name: "Aston Villa" },
    { id: 14, name: "Feyenoord" },
    { id: 15, name: "Club Brugge" },
    { id: 16, name: "Lille" }
]

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
};