/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import button from "mdlean/lib/button";
import Row from "components/Row";
import Title from "components/Title";
import cardComponent from "./cardComponent";
import Content from "./content";

export default (context) => {
  const { tr, palette } = context;
  const Button = button(context, {
    cssOverride: css`
      width: 300px;
    `,
  });
  const CardIcon = cardComponent(context);
  const { features, frontend, backend, tools } = Content();

  const Section = styled("section")(() => ({
    borderTop: `1px solid ${palette.borderColor}`,
    paddingBottom: 30,
  }));

  const HeaderView = styled("section")({
    padding: 20,
  });

  function Header() {
    return (
      <HeaderView>
        <h1>{tr.t("StarHackIt")}</h1>
        <h2>{tr.t("A Full Stack Web Application Starter Kit")}</h2>
        <h3>{tr.t("Built with React, Node, data backed by SQL")}</h3>
        <h3>
          {tr.t("Infrastructure as code by ")}
          <a target="_blank" href="https://grucloud.com">
            GruCloud
          </a>
        </h3>

        <ul
          css={css`
            list-style: none;
          `}
        >
          <li>
            <Button
              raised
              label="Clone the code"
              href="https://github.com/FredericHeem/starhackit"
              icon={
                <img
                  src={require("./img/github.svg").default}
                  width={20}
                  alt="github"
                />
              }
            />
          </li>
          <li>
            <br />
            <Button
              primary
              raised
              label="Explore the documentation"
              href="https://fredericheem.gitbook.io/starhackit"
            />
          </li>
        </ul>
        <br />
      </HeaderView>
    );
  }

  function Features() {
    return (
      <Section>
        <Title>{tr.t("Features")}</Title>
        <Row
          css={css`
            text-align: center;
          `}
        >
          {features.map((card, key) => (
            <CardIcon key={key} {...card} />
          ))}
        </Row>
      </Section>
    );
  }

  const E2eImg = styled("img")({
    width: "100%",
    maxWidth: "1200",
  });

  function End2End() {
    return (
      <Section>
        <Title>{tr.t("End to End Testing")}</Title>
        <E2eImg
          alt="functional-testing"
          src="https://raw.githubusercontent.com/FredericHeem/gifs/master/starhackit-functional-testing.gif"
        />
      </Section>
    );
  }

  function Frontend() {
    return (
      <Section>
        <Title>{tr.t("Frontend - User Interface")}</Title>
        <Row>
          {frontend.map((card, key) => (
            <CardIcon key={key} {...card} />
          ))}
        </Row>
      </Section>
    );
  }

  function Backend() {
    return (
      <Section>
        <Title>{tr.t("Backend - API Server")}</Title>
        <Row>
          {backend.map((card, key) => (
            <CardIcon key={key} {...card} />
          ))}
        </Row>
      </Section>
    );
  }

  function Tools() {
    return (
      <Section>
        <Title>{tr.t("Developer Tools")}</Title>
        <Row>
          {tools.map((card, key) => (
            <CardIcon key={key} {...card} />
          ))}
        </Row>
      </Section>
    );
  }

  function LandingScreen() {
    return (
      <div style={{ maxWidth: "100vw", textAlign: "center" }}>
        <Header />
        <Features />
        <End2End />
        <Frontend />
        <Backend />
        <Tools />
      </div>
    );
  }

  return LandingScreen;
};
