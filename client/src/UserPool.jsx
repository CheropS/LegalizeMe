import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-north-1_vvjsMv5Kg",
    ClientId: "27ugv97t5v1de1fqubso6eibpd"
}

export default new CognitoUserPool(poolData);