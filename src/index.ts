import {MergeSort} from "./MergeSort/MergeSort";
import {BubbleSort} from "./BubbleSort/BubbleSort";
import {Solver} from "./Solver/Solver";


// ClientCode
const mySolver = new Solver([15, 2, 3], new BubbleSort());
mySolver.logic();

mySolver.setStrategy(new MergeSort());
mySolver.logic();