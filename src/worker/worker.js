export default {
    async fetch(request, env) {
      const { pathname } = new URL(request.url);
  
      if (pathname === "/api/todos") {
        const { results } = await env.TODODB
          .prepare("SELECT * FROM Todo WHERE id = ?")
          .bind(1)
          .run();
        return Response.json(results);
      }
  
      return new Response(
        "Call /api/todos to see todo with id 1",
      );
    },
};