const SUPABASE_URL = 'https://mjukwettrllpfumtwijm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdWt3ZXR0cmxscGZ1bXR3aWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1MzEwMzMsImV4cCI6MTk2MDEwNzAzM30.VlBzi13QTeywkUF1tXU8yRtqiGbDi25VyV5V__o3rk4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

export async function fetchFamily() {
    const resp = await client.from('family-data').select('*');
    // eslint-disable-next-line no-console
    console.log(resp, 'test');

    return checkError(resp);
    // return resp;
}

export async function fetchMember(id) {
    const resp = await client.from('family-data').select('*').match({ id: id }).single();
    // eslint-disable-next-line no-console
    console.log('test', resp);
    return checkError(resp);
}
