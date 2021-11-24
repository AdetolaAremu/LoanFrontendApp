import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const DashBoardLazy = () => {
  const _LazyDetails = (
    <div className="_top">
      <div className="_xt">
        <div className="_pic">
          <div className="user-image mr-3">
            <Skeleton circle={true} height={78} width={78} />
          </div>
        </div>
        <div className="_detail">
          <div className="_salut">
            <Skeleton height={17} width={270} />
          </div>
          <div className="_dte">
            {" "}
            <Skeleton height={17} width={100} />
          </div>
          <div className="text  mt-1">
            <span className="mr-1">
              <Skeleton circle={true} height={20} width={20} />
            </span>
            <Skeleton height={17} width={100} />
          </div>
        </div>
      </div>

      <div className="_bt">
        <Skeleton height={38} width={120} />
      </div>
    </div>
  );
  const _LazyOverview = Array(4)
    .fill(null)
    .map((item, index) => (
      <div key={index * 3} className="bx">
        <div className="_bd">
          <div className="_icn">
            <Skeleton width={25} height={25} />
          </div>
          <div className="_dtl">
            <div className="_lbl mb-1">
              <Skeleton height={17} width={90} />
            </div>
            <Skeleton height={20} width={40} />
          </div>
        </div>
        <div className="ft">
          <Link to="#">
            <Skeleton height={20} width={60} />
          </Link>
        </div>
      </div>
    ));

  const _LazyEvents = Array(2)
    .fill(null)
    .map((item, index) => (
      <div key={index * 5} className="_ev mb-2">
        <div className="_tp">
          <div className="_nme">
            <Skeleton height={25} width={47} />
          </div>
          <div className="_ctrls">
            {" "}
            <Skeleton height={25} width={27} />
          </div>
        </div>
        <div className="_bdy">
          <Skeleton height={25} width={120} />
          <div className="_ddte">
            <Skeleton height={18} width={60} />
          </div>
        </div>
        <div className="ft">
          <Link to="#">
            <Skeleton height={20} width={60} />
          </Link>
        </div>
      </div>
    ));
  return (
    <>
      {_LazyDetails}
      <div className="my-3">
        <div className="mb-2">
          <Skeleton width={80} height={25} />
        </div>
        <div className="_bxs">{_LazyOverview}</div>
      </div>

      <div className="_evts"> {_LazyEvents}</div>
    </>
  );
};

export function HeaderLazyLoads() {
  return (
    <div className="navbar-content">
      <ul className="navbar-nav">
        <li className="nav-item nav-company">
          <div>
            <Skeleton width={120} />
          </div>
        </li>
        {Array(2)
          .fill(null)
          .map((item, index) => (
            <li key={index + 4} className="nav-item nav-messages">
              <Skeleton circle={true} height={20} width={20} />
            </li>
          ))}
        <li className="nav-item nav-messages">
          <Skeleton circle={true} height={30} width={30} />
        </li>
      </ul>
    </div>
  );
}

export const SidebarLazyLoads = () => {
  const _LazySideBar = (
    <li className="nav-item">
      <Link to={{}} className="nav-link">
        <Skeleton circle={true} height={30} width={30} />

        <span className="link-title">
          <Skeleton width={90} />
        </span>
      </Link>
    </li>
  );
  return (
    <>
      {Array(11)
        .fill(null)
        .map((item, index) => (
          <li key={index * 2} className="nav-item">
            <span className='"nav-link'></span>
            <Link to={"#"} className="nav-link">
              <Skeleton circle={true} height={30} width={30} />
              <span className="link-title">
                <Skeleton width={200} />
              </span>
            </Link>
          </li>
        ))}
    </>
  );
};

export const FormLazyLoad = () => {
  return (
    <div className="inner-page">
      <Skeleton height={"100vh"} />
    </div>
  );
};

export const SectionLazyLoad = () => {
  return (
    <div style={{ width: "100vw" }} className="m-3">
      <Skeleton height={300} />
    </div>
  );
};

export const SectionLazyLoadTable = () => {
  return (
    <tr style={{ width: "100vw" }} className="m-3"><th><Skeleton height={300} /></th></tr>
  );
};
