import React from "react";

const PrivatePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-4">Private Policy</h1>
      <p className="mb-4">
        Welcome to Skill-up. This Private Policy outlines the terms and
        conditions under which we provide our services and the use of our
        website. By accessing or using our services, you agree to comply with
        and be bound by this policy.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
        <p className="mb-4">
          By using our website and services, you acknowledge that you have read,
          understood, and agree to be bound by this Private Policy. If you do
          not agree with any part of this policy, you should not use our
          services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
        <p className="mb-4">As a user of our services, you agree to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Provide accurate and complete information during registration and
            use of our services.
          </li>
          <li>
            Maintain the confidentiality of your account information and notify
            us immediately of any unauthorized use.
          </li>
          <li>
            Use our services in compliance with applicable laws and regulations.
          </li>
          <li>
            Respect the intellectual property rights of others and not engage in
            any activity that infringes on these rights.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Prohibited Activities</h2>
        <p className="mb-4">
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Using our services for any unlawful purpose or in a manner that
            violates any local, state, national, or international law.
          </li>
          <li>
            Interfering with or disrupting the integrity or performance of our
            services or the data contained therein.
          </li>
          <li>
            Attempting to gain unauthorized access to our services or their
            related systems or networks.
          </li>
          <li>Transmitting any viruses, malware, or other harmful code.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or suspend your access to our
          services, without prior notice or liability, for any reason, including
          if you breach any of the terms of this Private Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by applicable law, Skill-up shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or other
          intangible losses, resulting from your use of our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p className="mb-4">
          This Private Policy shall be governed and construed in accordance with
          the laws of [Your Jurisdiction], without regard to its conflict of law
          provisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Private Policy
        </h2>
        <p className="mb-4">
          We reserve the right to modify this Private Policy at any time. We
          will notify you of any changes by posting the new Private Policy on
          this page. You are advised to review this Private Policy periodically
          for any changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Private Policy, please contact us
          at [Your Contact Email].
        </p>
      </section>
    </div>
  );
};

export default PrivatePolicy;
