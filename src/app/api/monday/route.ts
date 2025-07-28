export async function POST(req: Request) {
  const { name, email, phone, text } = await req.json();

  const today = new Date().toISOString().split("T")[0];

  const columnValues = {
    email_mksmase2: { email: email, text: email },
    phone_mksmc6xt: phone,
    text_mksm8jyk: text,
    date4: { date: today },
  };

  // Stringify and escape
  const escapedColumnValues = JSON.stringify(columnValues).replace(/"/g, '\\"');
  const query = `
    mutation {
      create_item (
        board_id: 2039037662,
        item_name: "${name}",
        column_values: "${escapedColumnValues}"
      ) {
        id
      }
    }
  `;

  const mondayApiToken = process.env.MONDAY_API_TOKEN;
  if (!mondayApiToken) {
    return new Response(JSON.stringify({ error: "Missing Monday API token" }), {
      status: 500,
    });
  }

  const res = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: mondayApiToken,
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
}
