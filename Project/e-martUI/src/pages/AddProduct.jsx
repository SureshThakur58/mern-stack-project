import { Formik } from "formik";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import productSchema from "../schema/product.schema";
import { productCategories } from "../constants/general.constant";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios.instance";

const AddProduct = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["add-product"],
    mutationFn: async (values) => {
      return await axiosInstance.post("/product/add", values);
    },
    onSuccess: (res) => {
      navigate("/");
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  if (isPending) return <CircularProgress />;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "7.5rem" }}>
      <Header />
      <Formik
        initialValues={{
          name: "",
          brand: "",
          price: 0,
          quantity: 1,
          category: "",
          description: "",
          hasFreeShipping: false,
        }}
        validationSchema={productSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "1rem",
                minWidth: "400px",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h4">Add Product</Typography>

              <FormControl fullWidth>
                <TextField
                  required
                  label="Name"
                  {...formik.getFieldProps("name")}
                />

                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  required
                  label="Brand"
                  {...formik.getFieldProps("brand")}
                />

                {formik.touched.brand && formik.errors.brand ? (
                  <FormHelperText error>{formik.errors.brand}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  required
                  type="number"
                  label="Price"
                  {...formik.getFieldProps("price")}
                />

                {formik.touched.price && formik.errors.price ? (
                  <FormHelperText error>{formik.errors.price}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  required
                  type="number"
                  label="Quantity"
                  {...formik.getFieldProps("quantity")}
                />

                {formik.touched.quantity && formik.errors.quantity ? (
                  <FormHelperText error>
                    {formik.errors.quantity}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label="Category" {...formik.getFieldProps("category")}>
                  {productCategories.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Free shipping</Typography>
                <Checkbox {...formik.getFieldProps("hasFreeShipping")} />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  multiline
                  rows={7}
                  required
                  label="Description"
                  {...formik.getFieldProps("description")}
                />

                {formik.touched.description && formik.errors.description ? (
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="success"
              >
                submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default AddProduct;