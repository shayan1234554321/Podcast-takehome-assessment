import { Dropdown, Pagination } from "semantic-ui-react";
import "./PaginationComponent.css";
import { itemsPerPage } from "@/utility/constants";


const PaginationComponent = ({ pagination, onPaginationChange }) => {
  return (
    <div className="paginationComponent">
      <div className="left">
        Showing{" "}
        <Dropdown
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          options={itemsPerPage}
          onChange={(e, { value }) => {
            onPaginationChange(null, value);
          }}
          value={pagination.limit}
          icon={
            <img src="arrow.svg" alt="custom icon" style={{ width: "15px" }} />
          }
        />{" "}
        items per page
      </div>
      <div className="right">
        <Pagination
          activePage={pagination.page}
          boundaryRange={1}
          onPageChange={(e, { activePage }) =>
            onPaginationChange(activePage, null)
          }
          size="mini"
          siblingRange={1}
          totalPages={pagination.totalPages}
          firstItem={true}
          lastItem={true}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
