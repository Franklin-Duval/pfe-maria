export class CompanyEntity {
  id: string;
  insurer: string;
  company_name: string;
  date: string;
  address: string;
  website: string;
  activity: string;
  registration_number: string;

  present_turnover: number;
  future_turnover: number;
  past_turnover: number;

  marge_brut: number;
  online_share: number;
  num_employees: number;
  num_clients: number;

  antimalware: boolean;
  patch: boolean;
  pentest: boolean;
  access_control1: boolean;
  access_control2: boolean;
  access_control3: boolean;
  two_factor_auth: boolean;
  passw_policy: boolean;
  encryption: boolean;
  pci: boolean;

  supplier_name: string;

  secu_prestataires: boolean;
  audit_prestataire: boolean;
  backup: boolean;

  backup_freq: string;

  continuity_plan: boolean;
  rto_gt_threshold: boolean;

  min_rto: string;
  emp_training: boolean;

  start_date: string;
  end_date: string;
  undersigned_name: string;
  done_at: string;
  on_the_date: string;
  signature_date: string;

  firewall: boolean;
  least_priv: boolean;
  rpo: boolean;
  solvency: number;
  debt_coverage: number;

  constructor(company: CompanyEntity) {
    this.id = company.id;
    this.insurer = company.insurer;
    this.company_name = company.company_name;
    this.date = company.date;
    this.address = company.address;
    this.website = company.website;
    this.activity = company.activity;
    this.registration_number = company.registration_number;
    this.present_turnover = company.present_turnover;
    this.future_turnover = company.future_turnover;
    this.past_turnover = company.past_turnover;
    this.marge_brut = company.marge_brut;
    this.online_share = company.online_share;
    this.num_employees = company.num_employees;
    this.num_clients = company.num_clients;
    this.antimalware = company.antimalware;
    this.patch = company.patch;
    this.pentest = company.pentest;
    this.access_control1 = company.access_control1;
    this.access_control2 = company.access_control2;
    this.access_control3 = company.access_control3;
    this.two_factor_auth = company.two_factor_auth;
    this.passw_policy = company.passw_policy;
    this.encryption = company.encryption;
    this.pci = company.pci;
    this.supplier_name = company.supplier_name;
    this.secu_prestataires = company.secu_prestataires;
    this.audit_prestataire = company.audit_prestataire;
    this.backup = company.backup;
    this.backup_freq = company.backup_freq;
    this.continuity_plan = company.continuity_plan;
    this.rto_gt_threshold = company.rto_gt_threshold;
    this.min_rto = company.min_rto;
    this.emp_training = company.emp_training;
    this.start_date = company.start_date;
    this.end_date = company.end_date;
    this.undersigned_name = company.undersigned_name;
    this.done_at = company.done_at;
    this.on_the_date = company.on_the_date;
    this.signature_date = company.signature_date;
    this.firewall = company.firewall;
    this.least_priv = company.least_priv;
    this.rpo = company.rpo;
    this.solvency = company.solvency;
    this.debt_coverage = company.debt_coverage;
  }
}
