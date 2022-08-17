import React from "react";
import useStyles from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useContextStates from "../../hooks/useContextStates";
import AlertDialog from "../AlertDialog";
import Backdrop from "../Backdrop";
import Chip from "@material-ui/core/Chip";

export default function ProductCard({
  name,
  brand,
  category,
  description,
  price,
  available,
  daily_rate,
  fine_amount,
  productId,
  stock,
  image,
}) {
  const classes = useStyles();
  const history = useHistory();
  const { loading, setProductIdEdit, setOpen } = useContextStates();
  const isAvailable = available ? "disponível" : "indisponível"

  function handlePushEditProductId(id) {
    setProductIdEdit(id);
    history.push(`/produtos/${id}/editar`);
  }

  return (
    <Card className={classes.root}>
      <Backdrop loading={loading} />
      <AlertDialog productId={productId} />
      <CardMedia className={classes.media} image={image} title={name} />

      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          height: "257px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography gutterBottom variant="h6" component="h6">
            {name}
          </Typography>

          <Typography
            variant="body2"
            style={{
              marginTop: "10px",
              color: "rgba(34, 34, 34, 0,87)",
              fontSize: "1rem"
            }}
            component="p"
          >
            Marca: {brand}
          </Typography>

          <Typography
            variant="body2"
            style={{
              marginTop: "10px",
              color: "rgba(34, 34, 34, 0,87)",
              fontSize: "1rem"
            }}
            component="p"
          >
            {description}
          </Typography>

          <Typography
            variant="body2"
            style={{
              marginTop: "10px",
              color: "rgba(34, 34, 34, 0,87)",
              fontSize: "1rem"
            }}
            component="p"
          >
            Preço da diária: R$ {Number(daily_rate).toFixed(2)}
          </Typography>

          <Typography
            variant="body2"
            style={{
              marginTop: "10px",
              color: "rgba(34, 34, 34, 0,87)",
              fontSize: "1rem"
            }}
            component="p"
          >
            Devol. Premat.: R$ {Number(fine_amount).toFixed(2)}
          </Typography>

          <Typography
            variant="body2"
            style={{
              marginTop: "10px",
              color: "rgba(34, 34, 34, 0,87)",
              fontSize: "1rem"
            }}
            component="p"
          >
            Dispo.: {isAvailable}
          </Typography>
        </div>
      </CardContent>
    </Card >
  );
}
