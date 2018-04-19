export class CertData {
    constructor(
        public country: string,
        public state: string,
        public city: string,
        public organization: string,
        public organizationalUnit: string,
        public commonName: string,
        public emailAddress: string,
        public days: string
    ) {}
}
