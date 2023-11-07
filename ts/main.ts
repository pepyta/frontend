
export function osztalyoz(bemenet: number): number {
    if(bemenet >= 0 && bemenet <= 40) {
        return 1;
    } else if(bemenet >= 41 && bemenet <= 55) {
        return 2;
    } else if(bemenet >= 56 && bemenet <= 70) {
        return 3;
    } else if(bemenet >= 71 && bemenet <= 85) {
        return 4;
    } else if(bemenet >= 86 && bemenet <= 100) {
        return 5;
    }
    
    return 0;
}