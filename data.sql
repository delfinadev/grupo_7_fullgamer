﻿﻿INSERT INTO fullgamer.cart (user_id,items,total) VALUES 
(4,1,6251)
,(9,10,53385)
,(4,3,13651)
,(7,1,5444)
,(10,2,14907)
;﻿INSERT INTO fullgamer.cart_detail (product_id,quantity,cart_id) VALUES 
(2,1,1)
,(3,5,2)
,(8,5,2)
,(6,1,3)
,(4,1,3)
,(1,1,3)
,(5,1,4)
,(7,2,5)
;﻿INSERT INTO fullgamer.categories (name) VALUES 
('Micrófono')
,('Mouse')
,('Capturadora de pantalla')
,('Mouse pad')
,('Teclado')
,('Gabinete')
,('Auriculares')
;﻿INSERT INTO fullgamer.images (name,product_id,created_at,updated_at) VALUES 
('Redragon-DITI-Outemu.jpg',8,'2021-10-25 10:34:01.000',NULL)
,('Kotion-each-G2000-3.5mm.jpg',7,'2021-10-25 10:34:01.000',NULL)
,('Screecher-RTX-3090-24GB.png',6,'2021-10-25 10:34:01.000',NULL)
,('Keyboard-comb-wired-mini-T9-pro.jpg',5,'2021-10-25 10:34:01.000',NULL)
,('RGB-Mouse-pad-large-gaming.jpg',4,'2021-10-25 10:34:01.000',NULL)
,('Capture-card-live-gamer-4K.png',3,'2021-10-25 10:34:01.000',NULL)
,('MSI-Clutch-GM08.jpg',2,'2021-10-25 10:34:01.000',NULL)
,('Microphone-spirit-gamer-EKO.jpg',1,'2021-10-25 10:34:01.000',NULL)
,('mouse-segunda-foto.jpg',2,'2021-10-25 10:34:01.000',NULL)
;﻿INSERT INTO fullgamer.products (name,price,description,category_id,created_at,updated_at) VALUES 
('Micrófono Spirit of Gamer EKO',6949,'congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus',1,'2021-10-25 10:29:14.000',NULL)
,('Mouse MSI Clutch GM08 Black',6251,'erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices',2,'2021-10-25 10:29:14.000',NULL)
,('Capture card Live Gamer 4K AVerMedia',1062,'tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa',3,'2021-10-25 10:29:14.000',NULL)
,('Mouse pad RGB gamer large',2775,'odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non',4,'2021-10-25 10:29:14.000',NULL)
,('Teclado Delux gamer mini T9 pro',5444,'libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien',5,'2021-10-25 10:29:14.000',NULL)
,('Gabinete Gaming RGB',3927,'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',6,'2021-10-25 10:29:14.000',NULL)
,('Gamer headset Kotion Each G2000 azul',7453,'dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas',7,'2021-10-25 10:29:14.000',NULL)
,('Teclado Redragon Diti Outemu',9615,'praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat',5,'2021-10-25 10:29:14.000',NULL)
;﻿INSERT INTO fullgamer.users (`user`,email,password,notifications,image,`role`) VALUES 
('JenniferYuimil23','jyuill0@bandcamp.com','$2a$10$8j9j2lY5awHRcpzcKWd2euiGzOwj6RCEC20OADWyd3XIiDhZ9YfgS','on','user-default.jpg',1)
,('CaitlinImmin1','cimmins1@zdnet.com','$2a$10$Jtu6SdOKy5SV4jup85xBLOfG0PtZoGVmue4wvkfyBemrYPuDpVn5u','on','user-default.jpg',1)
,('GayleWoodberry74','gwoodberry2@bbc.co.uk','$2a$10$sqMErZSJyqXnnh5HYfjroO5XbvBvSr3kzPHTNERzv8nb5vvsvBvUG','off','user-default.jpg',1)
,('EmmelinF','efludgate3@wunderground.com','$2a$10$/AbOpafAiNseIyVdSpN.v.qqpm8xCi.Rx62hpRPKFamE6tf8i1MXe','on','user-default.jpg',1)
,('theRayPerford','rperford4@ebay.co.uk','$2a$10$vII0iHpjuA4N6WhyQg4MDeEnRlzy4gZRGJMYehrWDSCHycaTsTN56','off','user-default.jpg',1)
,('carmSced555','cscedall5@squarespace.com','$2a$10$eX2MM8zqli1lBtbmgebuFOPs/KbJdRvDae8H/A1voJQqJaq8pQDMm','off','user-default.jpg',1)
,('notRonaldo','rstrute6@stanford.edu','$2a$10$W9ODy3/QS/ey4jP4xxL6m.myJaxoqT3TSHpiyjquZK.gxojkrDboS','off','user-default.jpg',1)
,('kathmeharry','kmeharry7@sphinn.com','$2a$10$.MVqRksR4xLuvaOn0tke7uOX1bZ0GtWXTJHlEex6fwl1Tq1ap4Hjm','off','user-default.jpg',1)
,('sarundel88','sarundel8@go.com','$2a$10$3rJnDNbpD9l6.r6nq7H/geAvs5HBmuGv8jiab2Pl7z5LomEjg5FoS','on','user-default.jpg',1)
,('Tameeeraaa','tolivi9@dedecms.com','$2a$10$TSs0JaEiHurcFkFt6PetMeNX6nkVjyxKsnKpk1ZxMfWHrhZ0moTLq','off','user-default.jpg',1)
;