<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- Keep this website as one index route with anchor navigation because all requested sections belong to one page.
- Keep public company details and contact URL construction in a browser-safe shared module so UI and business-rule tests use the same source.
- Send the contact form through a user-confirmed WhatsApp message rather than claiming email delivery without a configured email service.
- Use Maps Embed with the connector's public referrer-restricted browser key; do not expose server credentials or add billable public Places calls.
- Keep semantic colors and reusable visual styling in the global stylesheet and Button variants to maintain a consistent brand system.
