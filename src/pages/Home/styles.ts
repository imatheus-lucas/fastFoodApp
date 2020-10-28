import styled from "styled-components/native";

interface IText {
  isBold?: boolean;
  size?: number;
}

export const Container = styled.View`

  align-items: center;
  padding: 25px 16px;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const WelcomeText = styled.Text<IText>`
  font-size: ${(props) => (props.size ? props.size : 30)};
  color: #343434;
  font-family: ${(props) => (props.isBold ? "OpenSansBold" : "OpenSans")};
`;

export const Advertising = styled.View`
  width:100%;
  flex-direction: row;
  align-items: center;
  background:#FF6584;
  border-radius:10px;
  height:120px;
  padding:10px;
  margin: 16px 0;
`;
export const AdvertisingWrapper = styled.View``;

export const AdvertingText = styled.Text<IText>`
  font-size: ${(props) => (props.size ? props.size : "24px")};
  color: #fff;
  font-family: ${(props) => (props.isBold ? "OpenSansBold" : "OpenSans")};
`;
export const AdvertingSubText = styled.Text<IText>`
 font-size: ${(props) => (props.size ? props.size : "20px")};
  color: #fff;
  font-family: ${(props) => (props.isBold ? "OpenSansBold" : "OpenSans")};
`;

export const AdvertisingImage = styled.Image``;

export const Wrappper =styled.ScrollView`
flex-direction:row;`;
