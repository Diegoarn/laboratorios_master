export interface MemberEntity {
  avatar_url: string;
  id: string;
  login: string;
}

export interface DataModel {
  name: string;
  company: string;
  type: string;
  url: string;
}

export interface CompanyModel {
  company: string;
  setCompany: (value: string) => void;
}
