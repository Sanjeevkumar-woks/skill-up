import React from "react";

const RefundReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-4">Refund & Return Policy</h1>
      <p className="mb-4">
        Thank you for shopping at Skill-up. We are committed to providing
        high-quality educational content and services. If you are not entirely
        satisfied with your purchase, we're here to help.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
        <p className="mb-4">
          If you are not satisfied with a course or service, you may be eligible
          for a refund within 30 days of your purchase. To be eligible for a
          refund, the following conditions must be met:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            You must provide proof of purchase (order number, receipt, etc.).
          </li>
          <li>
            The course or service must be unused or not significantly used.
          </li>
          <li>
            You must request the refund within 30 days of the purchase date.
          </li>
        </ul>
        <p className="mb-4">
          Once we receive your refund request, we will review it and notify you
          of the status of your refund. If your request is approved, we will
          initiate a refund to your original method of payment. You will receive
          the credit within a certain amount of days, depending on your card
          issuer's policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Exchanges</h2>
        <p className="mb-4">
          We only replace courses or services if they are defective or damaged.
          If you need to exchange a course or service for the same item, please
          contact us at [Your Contact Email] with your order number and details
          about the product.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Non-refundable Items</h2>
        <p className="mb-4">Certain items are non-refundable, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Downloadable software products</li>
          <li>
            Subscription services after the subscription period has started
          </li>
          <li>Gift cards</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Late or Missing Refunds</h2>
        <p className="mb-4">
          If you haven’t received a refund yet, first check your bank account
          again. Then contact your credit card company; it may take some time
          before your refund is officially posted. Next, contact your bank.
          There is often some processing time before a refund is posted. If
          you’ve done all of this and you still have not received your refund
          yet, please contact us at [Your Contact Email].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Refund & Return Policy, please
          contact us at [Your Contact Email].
        </p>
      </section>
    </div>
  );
};

export default RefundReturnPolicy;
