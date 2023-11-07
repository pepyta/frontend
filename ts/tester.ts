import { osztalyoz } from "./main";

if(osztalyoz(0) == 1) {
    console.log("1. Success!")
} else {
    console.log("1. FAIL!");
}

if(osztalyoz(25) == 1) {
    console.log("2. Success!")
} else {
    console.log("2. FAIL!");
}

if(osztalyoz(55) == 2) {
    console.log("3. Success!")
} else {
    console.log("3. FAIL!");
}

if(osztalyoz(72) == 4) {
    console.log("4. Success!")
} else {
    console.log("4. FAIL!");
}

if(osztalyoz(100) == 5) {
    console.log("5. Success!")
} else {
    console.log("5. FAIL!");
}

if(osztalyoz(-2) == 0) {
    console.log("6. Success!")
} else {
    console.log("6. FAIL!");
}
