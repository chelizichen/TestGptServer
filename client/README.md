# 贷款管理平台

用户表（Users）

用户ID（User ID）
用户名（Username）
密码（Password）
电子邮件（Email）
手机号码（Phone Number）
地址（Address）

贷款申请表（Loan Applications）

申请ID（Application ID）
用户ID（User ID）
贷款金额（Loan Amount）
贷款期限（Loan Term）
贷款利率（Loan Interest Rate）
申请日期（Application Date）
状态（Status）

贷款合同表（Loan Contracts）

合同ID（Contract ID）
申请ID（Application ID）
用户ID（User ID）
合同金额（Contract Amount）
合同期限（Contract Term）
还款计划（Repayment Schedule）
签订日期（Signing Date）
状态（Status）

还款记录表（Repayment Records）

记录ID（Record ID）
合同ID（Contract ID）
用户ID（User ID）
还款金额（Repayment Amount）
还款日期（Repayment Date）

用户表
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  address VARCHAR(255)
);

贷款申请表
CREATE TABLE loan_applications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  loan_amount DECIMAL(10, 2),
  loan_term INT,
  loan_interest_rate DECIMAL(5, 2),
  application_date DATE,
  status VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id)

贷款合同表
CREATE TABLE loan_contracts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  application_id INT,
  user_id INT,
  contract_amount DECIMAL(10, 2),
  contract_term INT,
  repayment_schedule VARCHAR(255),
  signing_date DATE,
  status VARCHAR(20),
  FOREIGN KEY (application_id) REFERENCES loan_applications(id),
  FOREIGN KEY (user_id) REFERENCES users(id)

还款记录表
CREATE TABLE repayment_records (
  id INT PRIMARY KEY AUTO_INCREMENT,
  contract_id INT,
  user_id INT,
  repayment_amount DECIMAL(10, 2),
  repayment_date DATE,
  repayment_method VARCHAR(50)
);