import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
  Avatar,
} from "@mui/material";

import { Stack } from "@mui/system";
import { IconBasket } from "@tabler/icons-react";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const ecoCard = [
  {
    title: "Keyword Research Playbook",
    subheader: "Updated Feb 2025",
    photo: "/images/products/s4.jpg",
    salesPrice: 74,
    price: 84,
    rating: 4,
  },
  {
    title: "Backlink Gap Analysis",
    subheader: "Updated Feb 2025",
    photo: "/images/products/s5.jpg",
    salesPrice: 92,
    price: 97,
    rating: 5,
  },
  {
    title: "Site Audit Checklist",
    subheader: "Updated Feb 2025",
    photo: "/images/products/s7.jpg",
    salesPrice: 65,
    price: 80,
    rating: 3,
  },
  {
    title: "Content Brief Templates",
    subheader: "Updated Feb 2025",
    photo: "/images/products/s11.jpg",
    salesPrice: 58,
    price: 70,
    rating: 2,
  },
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid
          key={index}
          size={{
            xs: 12,
            md: 4,
            lg: 3,
          }}
        >
          <BlankCard>
            <Typography component={Link} href="/">
              <Avatar
                src={product.photo}
                variant="square"
                sx={{
                  height: 250,
                  width: "100%",
                }}
              />
            </Typography>
            <Tooltip title="Open resource">
              <Fab
                size="small"
                color="primary"
                sx={{ bottom: "75px", right: "15px", position: "absolute" }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">${product.price}</Typography>
                  <Typography
                    color="textSecondary"
                    ml={1}
                    sx={{ textDecoration: "line-through" }}
                  >
                    ${product.salesPrice}
                  </Typography>
                </Stack>
                <Rating
                  name="read-only"
                  size="small"
                  value={product.rating}
                  readOnly
                />
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
