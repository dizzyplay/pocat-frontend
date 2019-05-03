import { gql } from "apollo-boost";

export const MY_CAT_LIST = gql`
  {
    myCatList {
      uuid
      name
      image
    }
  }
`;

export const CAT_INFO = gql`
  query catInfo($uuid: String!) {
    catInfo(uuid: $uuid) {
      uuid
      image
      name
      birth
      neutering
      pregnant
      kinds {
        title
      }
      weights {
        id
        weight
      }
    }
  }
`;
