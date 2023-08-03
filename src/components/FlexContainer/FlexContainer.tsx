import React from "react";

import styles from "./FlexContainer.module.css";

export interface Props {
  children: React.ReactNode;
}

export function FlexContainer({ children }: Props) {
  return <ul className={styles.FlexContainer}>{children}</ul>;
}
