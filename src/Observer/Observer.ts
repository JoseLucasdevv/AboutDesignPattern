import { Subject } from "./Subject";
import { ConcreteObserver1, ConcreteObserver2 } from "./ConcreteObservers";

// Create a Subject
const subject = new Subject();

// Create Observers
const observer1 = new ConcreteObserver1();
const observer2 = new ConcreteObserver2();

// Register observers with the subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Simulate a state change in the subject
subject.setState("New State Data");
console.log(observer1.getCurrentState());
console.log(observer2.getCurrentState());
// Remove an observer and change the state again
subject.removeObserver(observer1);
subject.setState("Another State Data"); // Only observer2 will be notified

console.log(observer1.getCurrentState(), observer2.getCurrentState());
