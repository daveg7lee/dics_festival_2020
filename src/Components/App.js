import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { firebaseInstance } from "../firebase";
import Class from "./Class";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/Theme";
import Loader from "./Loader";

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  height: 5vh;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 12vh;
  background-color: #212121;
  color: white;
  font-size: 2.5rem;
  font-weight: 800;
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  width: 25%;
  background-color: #212121;
  color: white;
`;

const Body = styled.div`
  height: 70vh;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [], keys: [], id: [], Loaded: false };
  }
  async componentDidMount() {
    const classRef = firebaseInstance.database().ref();
    const data = await (await classRef.once("value")).val();
    this.setState({ data });
    this.setState({ keys: Object.keys(data) });
    this.setState({ Loaded: true });
  }
  render() {
    return this.state.Loaded ? (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Container>
            <Title>INTERNATIONAL DEPARTURES</Title>
            <Header>
              <HeaderItem>Status</HeaderItem>
              <HeaderItem>Destination</HeaderItem>
              <HeaderItem>Entrance</HeaderItem>
              <HeaderItem>Distance</HeaderItem>
            </Header>
            <Body>
              {this.state.keys.map((key) => (
                <Class
                  ClassName={key}
                  key={this.state.data[key].id}
                  value={this.state.data[key].clicked}
                  destination={this.state.data[key].destination}
                  distance={this.state.data[key].distance}
                />
              ))}
            </Body>
          </Container>
        </>
      </ThemeProvider>
    ) : (
      <Loader />
    );
  }
}

export default App;
