import { CreditCard } from "./CreditCard";
import { DebitCard } from "./DebitCard";
import { NubankRewards } from "./NubankRewards";

const card = new NubankRewards();

card.validate();
card.collectPayment();
