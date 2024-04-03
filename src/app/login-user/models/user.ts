export class SignupModel{
    
        firstName!: string;
        lastName!:string ;
        email!: string;
        password!: string;
        confirmPassword!: string;
        contact!: string;
        streetAddress!: string;
        gender!: string;
        dob!: Date;
        city!: string;
        active!: boolean;
      
}
export class LoginModel{
    email!: string;
    password!: string;
  }
  export class AddUserModel{
        firstName!: string;
        lastName!: string;
        email!: string;
        password!: string;
        confirmPassword!: string;
        contact!: string;
        streetAddress!: string;
        gender!: string;
        dob!: Date;
        city!: string;
        active!: boolean
      }

      export class GetUserList{
        id!: number;
        firstName!: string;
        lastName!: string;
        email!: string;
        password!: string;
        contact!: string;
        streetAddress!: string;
        gender!: string;
        dob!: Date;
        city!: string;
        active!: boolean;
        profile!: string;
        jwtToken!: string;
        address!:  string
      }