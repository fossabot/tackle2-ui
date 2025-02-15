import React from "react";

import { Pagination, PaginationVariant } from "@patternfly/react-core";
import spacing from "@patternfly/react-styles/css/utilities/Spacing/spacing";
import { PaginationStateProps } from "@app/shared/hooks/useLegacyPaginationState";

export interface SimplePaginationProps {
  paginationProps: PaginationStateProps;
  isTop: boolean;
  isCompact?: boolean;
  noMargin?: boolean;
  idPrefix?: string;
}

export const SimplePagination: React.FC<SimplePaginationProps> = ({
  paginationProps,
  isTop,
  isCompact = false,
  noMargin = false,
  idPrefix = "",
}) => {
  return (
    <Pagination
      id={`${idPrefix ? `${idPrefix}-` : ""}pagination-${
        isTop ? "top" : "bottom"
      }`}
      variant={isTop ? PaginationVariant.top : PaginationVariant.bottom}
      className={isTop || noMargin ? "" : spacing.mtMd}
      isCompact={isCompact}
      {...paginationProps}
      widgetId="pagination-id"
    />
  );
};
