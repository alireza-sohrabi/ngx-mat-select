import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import test from 'node:test';
import { createServer } from '../src/index.mjs';

test('server initializes and advertises the guarded release tools', async () => {
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  const server = createServer();
  const client = new Client({ name: 'publisher-test-client', version: '1.0.0' });

  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    const { tools } = await client.listTools();
    assert.deepEqual(
      tools.map((tool) => tool.name),
      ['npm_release_status', 'npm_validate_release', 'npm_publish_release'],
    );
    assert.equal(tools[0].annotations.readOnlyHint, true);
    assert.equal(tools[2].annotations.destructiveHint, true);
    assert.equal(tools[2].annotations.idempotentHint, false);
  } finally {
    await client.close();
    await server.close();
  }
});
