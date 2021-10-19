import React from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

interface DefaultProps {
  keyTranslation: string;
}

const Default: React.FC<DefaultProps> = ({ keyTranslation }) => {
  const { t } = useTranslation();
  const { push } = useHistory();

  return (
    <>
      <Header text={t(keyTranslation)} />
      <Body>
        <p className="text-2xl text-grey-600 text-center">
          {"This page does not exist yet. Please go to "}
          <span
            className="text-secondary cursor-pointer font-bold"
            onClick={() => push("/movies")}
          >
            {t("screens.movies")}
          </span>
        </p>
      </Body>
    </>
  );
};

export default Default;
