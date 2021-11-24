import React from 'react';
import ContentLoader from "react-content-loader";

export const AppLoader = (props) => {
  return (
    <ContentLoader
    speed={2}
    width={900}
    height={475}
    viewBox="0 0 700 475"
    backgroundColor="#cfd7e2"
    foregroundColor="#918888"
    {...props}
    >
      
      <rect x="12" y="58" rx="2" ry="2" width="220" height="150" />
      <rect x="240" y="57" rx="2" ry="2" width="220" height="150" />
      <rect x="467" y="56" rx="2" ry="2" width="220" height="150" />
      <rect x="12" y="230" rx="2" ry="2" width="220" height="150" />
      <rect x="240" y="230" rx="2" ry="2" width="220" height="150" />
      <rect x="468" y="230" rx="2" ry="2" width="220" height="150" />
    </ContentLoader>    
  )
}

export const KYCLoader = ({...rest}) => {
  return (
    <ContentLoader height="500" width="900" viewBox="0 0 500 230" {...rest}>
      {/* <rect x="15" y="15" rx="4" ry="4" width="350" height="25" /> */}
      <rect x="15" y="50" rx="2" ry="2" width="500" height="150" />
      <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
      <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
    </ContentLoader>
  )
};