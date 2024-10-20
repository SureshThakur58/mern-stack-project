import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Chip, Stack } from "@mui/material";
import { fallbackImage } from "../constants/general.constant";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 450 }}>
      <CardMedia
        sx={{ height: 300, objectFit: "contain", cursor: "pointer" }}
        image={props.image || fallbackImage}
        title={props.name}
        onClick={() => {
          navigate(`/product-detail/${props._id}`);
        }}
      />
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <Chip
            sx={{ textTransform: "capitalize" }}
            label={props.brand}
            color="success"
          />
          <Typography gutterBottom>Price:${props.price}</Typography>
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "justify" }}
        >
          {props.description.substring(0, 200)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="success"
          variant="contained"
          fullWidth
          startIcon={<RemoveRedEyeOutlinedIcon />}
          onClick={() => {
            navigate(`/product-detail/${props._id}`);
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;