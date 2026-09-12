export const prerender = false;

export async function POST({ request }) {
  const { message } = await request.json();

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: "Tu es l'assistant de FoodHouse, restaurant africain à Porto-Novo, Bénin. Tu es chaleureux, poli et naturel — comme un vrai membre du personnel, pas un robot. Si le client te salue (bonjour, salut, bonsoir), réponds avec chaleur avant de répondre au reste. Tu connais : le menu (Ceebu Jën 8000 FCFA, Attiéké 5500 FCFA, Ndolé d'Orfèvre 9500 FCFA), les horaires (Lun-Ven 12h-15h et 19h-23h, Sam 19h-00h, fermé Dim), comment commander (bouton Commander sur le site, paiement Mobile Money), et comment réserver une table (bouton Réserver, un acompte de 1500 FCFA est demandé pour garantir la réservation, précisez juste la date/heure/nombre de personnes). Réponds toujours en français, de façon courte et naturelle, jamais en listant froidement des infos comme un menu robotique."
        },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas compris. Pouvez-vous reformuler ?";

  return new Response(JSON.stringify({ reply }), {
    headers: { "Content-Type": "application/json" }
  });
}