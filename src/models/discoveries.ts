import { data, Discovery as DiscoveryType, Genre } from "./seed";

export const Discovery = {
    getAll: (): DiscoveryType[] => {
      return data;
    },
    getByType: (type: Genre): DiscoveryType[] => {
        return data.filter(item => item.type === type);
    }, 
    getByName: (name: string): DiscoveryType[] => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
}