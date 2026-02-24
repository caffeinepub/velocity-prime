# Specification

## Summary
**Goal:** Fix the email address `athletes@velocityhealthclinic.com` not displaying in the EnrollmentSection component.

**Planned changes:**
- Audit the EnrollmentSection component for conditional rendering, CSS visibility issues, or logic hiding the email callout
- Ensure the email is rendered visibly regardless of form state (idle, submitting, or success)
- Make the email a clickable mailto link or clearly styled text callout
- Verify visibility on both mobile and desktop screen sizes

**User-visible outcome:** The email address `athletes@velocityhealthclinic.com` is prominently visible in the enrollment section at all times, including on initial page load and after form submission.
