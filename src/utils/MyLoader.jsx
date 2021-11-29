import React from 'react';
import ContentLoader from "react-content-loader";

export const AppLoader = (props) => {
  return (
    <ContentLoader
    speed={2}
    width={900}
    height={475}
    viewBox="0 0 700 475"
    backgroundColor="#ffffff"
    foregroundColor="#80a3ea"
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
    <ContentLoader 
      height="500" width="900" 
      viewBox="0 0 500 230" 
      backgroundColor="#ffffff" 
      foregroundColor="#80a3ea" {...rest}
    >
      {/* <rect x="15" y="15" rx="4" ry="4" width="350" height="25" /> */}
      <rect x="15" y="50" rx="2" ry="2" width="500" height="150" />
      <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
      <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
    </ContentLoader>
  )
};

export const DashboardTopLoader = (props) => {
  return (
    <ContentLoader
    width={900}
    height={600}
    viewBox="0 0 800 575"
    backgroundColor="#ffffff"
    foregroundColor="#80a3ea"
    {...props}
  >
    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
    <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="281" rx="2" ry="2" width="440" height="211" />
    {/* <rect x="468" y="279" rx="2" ry="2" width="211" height="211" /> */}
    
  </ContentLoader>
  )   
}

export const ProfileLoader = (props) => {
  return (
    <ContentLoader viewBox="0 0 778 116" width={778} height={116} {...props}>
      <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
      <rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
      <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
      <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
      <rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
    </ContentLoader>
  )
}

export const BulletList = (props) => {
  return(
    <ContentLoader 
    speed={2}
    width={170}
    height={124}
    viewBox="0 0 200 124"
    backgroundColor="#ffffff"
    foregroundColor="#80a3ea"
    {...props}
    >
      <rect x="9" y="12" rx="3" ry="3" width="380" height="20" /> 
      <rect x="9" y="42" rx="3" ry="3" width="380" height="20" /> 
      <rect x="9" y="73" rx="3" ry="3" width="380" height="20" /> 
      <rect x="8" y="104" rx="3" ry="3" width="380" height="20" /> 
      <rect x="7" y="136" rx="3" ry="3" width="380" height="20" />
    </ContentLoader>
  )
}