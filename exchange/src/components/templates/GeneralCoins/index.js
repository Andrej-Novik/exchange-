import BlockHeader from "../../moleculs/BlockHeader";
import Coin from "../../moleculs/Coin";

import styles from "./styles.module.scss";

const Coins = ({ coins, coinsAmount }) => {
  return (
    <div className={styles.content}>
      <BlockHeader link={"View all"} path={"/coins"} title={"Coins"} />
      <div className={styles.coins}>
        {coins.slice(0, coinsAmount).map((coin) => {
          return (
            <Coin
              amount={coin.amount}
              img={coin.img}
              price={coin.price}
              key={coin.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
