+++
title = "Tests unitaires / Unit Tests"
menuTitle = "Tests unitaires"
draft = false
weight = 3080
+++

Les tests unitaires nous offrent de tester l'implémentation de nos fonctions.

La librairie `Junit` est très répandue et est compatible avec la majorité des IDE.

```java
package org.hololink;

import org.junit.Test;
import static org.junit.Assert.*;

public class MyUnitTests {

    @Test
    public void unTest() {
        assertEquals(5,5);
    }
}
```