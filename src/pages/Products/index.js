import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import MenuLayout from "../../components/MenuLayout";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useContextValues from "../../hooks/useContextValues";

export default function Products() {
  const { error, setError, user, products, loadProducts } = useContextValues();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <MenuLayout storeName={user.store_name} index={2}>
      <h1 className={classes.title}>{user.store_name}</h1>
      <h2 className={classes.subtitle}>Carros disponíveis</h2>

      <div
        style={{
          marginTop: "1rem",
          display: "grid",
          gridAutoFlow: "column",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, 14.5rem)",
        }}
      >
        {products.length > 0 &&
          products.map((product) => {
            return (
              <ProductCard
                name={product.name}
                brand={product.brand}
                category={product.category}
                description={product.description}
                price={product.daily_rate}
                available={product.available}
                daily_rate={product.daily_rate}
                fine_amount={product.fine_amount}
                image={product.CarImagesUrl}
                productId={product.id}
              />
            );
          })}
      </div>
      <Divider style={{ margin: "1rem 0" }} />
      {error && (
        <Alert className={classes.error} severity="error">
          {error}
        </Alert>
      )}
    </MenuLayout>
  );
}
