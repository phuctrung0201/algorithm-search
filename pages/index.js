import { Box, Container, Grid, GridItem } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { connect } from "react-redux";
import Navigate from "../components/navigate";

const mapState2NavigateProps = (state) => ({
  items: state.app.algorithmsList,
});

const ConnectedNavigate = connect(mapState2NavigateProps)(Navigate);

export default function Home() {
  return (
    <Box bg="red.500" py={8}>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={5}>
            <Box bg="white" p={4} borderRadius="md">
              Algorithm
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box bg="white" p={4} borderRadius="md">
              <Input mb={4} placeholder="Search" />
              <ConnectedNavigate />
            </Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Box bg="white" p={4} borderRadius="md"></Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
