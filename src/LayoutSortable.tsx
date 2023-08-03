import { rectSortingStrategy } from "@dnd-kit/sortable";
import { Sortable, Props as SortableProps } from "./Sortable";
import { FlexContainer, GridContainer } from "./components";

const commonProps: Partial<SortableProps> = {
  adjustScale: true,
  strategy: rectSortingStrategy,
  wrapperStyle: () => ({
    width: 140,
    height: 140,
  }),
};

const gridProps: Partial<SortableProps> = {
  ...commonProps,
  Container: (props: any) => <GridContainer {...props} columns={5} />,
};

const flexProps: Partial<SortableProps> = {
  ...commonProps,
  Container: (props: any) => <FlexContainer {...props} />,
};

export const FlexSortable = () => <Sortable {...flexProps} />;
export const GridSortable = () => <Sortable {...gridProps} />;
