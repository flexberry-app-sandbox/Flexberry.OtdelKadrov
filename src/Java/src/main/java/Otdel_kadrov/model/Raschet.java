package Otdel_kadrov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Расчет
 */
@Entity(name = "IISOtdel_kadrovРасчет")
@Table(schema = "public", name = "Расчет")
public class Raschet {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDсотрдника")
    private String idсотрдника;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nachalnik")
    @Convert("Nachalnik")
    @Column(name = "Начальник", length = 16, unique = true, nullable = false)
    private UUID _nachalnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nachalnik", insertable = false, updatable = false)
    private Nachalnik nachalnik;


    public Raschet() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getIDсотрдника() {
      return idсотрдника;
    }

    public void setIDсотрдника(String idсотрдника) {
      this.idсотрдника = idсотрдника;
    }


}