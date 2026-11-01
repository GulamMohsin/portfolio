import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { CertificateCard, CertificatePlaceholder } from '../components/CertificateCard';
import { certifications } from '../data/certifications';

export function Certifications() {
  const hasCertificates = certifications.length > 0;

  return (
    <Section
      id="certifications"
      eyebrow="12 · Certifications"
      title="Certifications"
      description={
        hasCertificates
          ? 'Certificates and credentials, with verification links where the issuer provides them.'
          : 'No certificates are listed yet. They will appear here once they have been earned and added.'
      }
      alt
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hasCertificates
          ? certifications.map((certification, index) => (
              <Reveal key={certification.id} delay={index * 0.05}>
                <CertificateCard certification={certification} />
              </Reveal>
            ))
          : [0, 1, 2].map((slot) => (
              <Reveal key={slot} delay={slot * 0.05}>
                <CertificatePlaceholder />
              </Reveal>
            ))}
      </div>
    </Section>
  );
}
